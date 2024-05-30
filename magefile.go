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

func Lint(ctx context.Context) error {
	if err := sh.Run("pnpm", "install"); err != nil {
		return fmt.Errorf("pnpm install: %w", err)
	}

	if err := sh.Run("pnpm", "lint"); err != nil {
		return fmt.Errorf("pnpm build: %w", err)
	}

	return nil
}

func Build(ctx context.Context) error {
	mg.CtxDeps(ctx, Lint)

	if err := sh.Run("pnpm", "install"); err != nil {
		return fmt.Errorf("pnpm install: %w", err)
	}

	if err := sh.Run("pnpm", "build", "--no-lint"); err != nil {
		return fmt.Errorf("pnpm build: %w", err)
	}

	return nil
}

func Docker(ctx context.Context) error {
	mg.CtxDeps(ctx, Build)

	if err := sh.Run("docker", "build", "--pull", "-f", "./Dockerfile", "-t", "maik-schreiber:latest", "--progress", "plain", "."); err != nil {
		return fmt.Errorf("docker build: %w", err)
	}

	if err := sh.Run("docker", "save", "-o", "maik-schreiber.docker.tar", "maik-schreiber:latest"); err != nil {
		return fmt.Errorf("docker save: %w", err)
	}

	return nil
}

func Deploy(ctx context.Context) error {
	mg.CtxDeps(ctx, Docker)

	for _, host := range []string{"k.blizzy.de", "k2.blizzy.de"} {
		if err := sh.Run("scp", "-C", "maik-schreiber.docker.tar", host+":"); err != nil {
			return fmt.Errorf("scp: %w", err)
		}

		if err := sh.Run("ssh", host, "sudo", "/usr/local/bin/k3s", "ctr", "images", "import", "-", "<", "maik-schreiber.docker.tar"); err != nil {
			return fmt.Errorf("import maik-schreiber.docker.tar: %w", err)
		}
	}

	if err := sh.Run("kubectl", "--context", "k.blizzy.de-mickey", "rollout", "restart", "deployment", "maik-schreiber"); err != nil {
		return fmt.Errorf("rollout restart maik-schreiber: %w", err)
	}

	return nil
}
