//go:build mage
// +build mage

package main

import (
	"context"
	"fmt"

	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

var Default = Deploy //nolint:deadcode // mage uses this

func DockerImage(ctx context.Context) error {
	if err := sh.Run("docker", "build", "-f", "Dockerfile", "-t", "maik-schreiber", "--progress", "plain", "."); err != nil {
		return fmt.Errorf("docker build: %w", err)
	}

	return nil
}

func SaveDockerImage(ctx context.Context) error {
	mg.CtxDeps(ctx, DockerImage)

	if err := sh.Run("docker", "save", "-o", "maik-schreiber.docker.tar", "maik-schreiber"); err != nil {
		return fmt.Errorf("docker save: %w", err)
	}

	return nil
}

func Deploy(ctx context.Context) error { //nolint:deadcode // mage uses this
	mg.CtxDeps(ctx, SaveDockerImage)

	if err := sh.Run("scp", "-C", "maik-schreiber.docker.tar", "mickey@blizzy.de:"); err != nil {
		return fmt.Errorf("scp: %w", err)
	}

	if err := sh.Run("ssh", "-C", "mickey@blizzy.de", "~/update-maik-schreiber.sh"); err != nil {
		return fmt.Errorf("update-maik-schreiber.sh: %w", err)
	}

	return nil
}
