//go:build mage
// +build mage

package main

import (
	"context"
	"fmt"
	"os"

	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

var Default = Deploy //nolint:deadcode // mage uses this

// Build builds the application.
func Build() error {
	if err := os.RemoveAll("dist"); err != nil {
		return fmt.Errorf("remove dist folder: %w", err)
	}

	if err := sh.Run("npm", "run", "build"); err != nil {
		return fmt.Errorf("npm build: %w", err)
	}

	if err := sh.Run("npm", "run", "snap"); err != nil {
		return fmt.Errorf("npm snap: %w", err)
	}

	return nil
}

// Deploy updates the live server with a new build of the application.
func Deploy(ctx context.Context) error { //nolint:deadcode // mage uses this
	mg.CtxDeps(ctx, Build)

	if err := sh.Run("tar", "cjpf", "maikschreiber.tar.bz2", "dist"); err != nil {
		return fmt.Errorf("tar: %w", err)
	}
	defer sh.Rm("maikschreiber.tar.bz2") //nolint:errcheck // ignore error

	if err := sh.Run("scp", "maikschreiber.tar.bz2", "mickey@blizzy.de:"); err != nil {
		return fmt.Errorf("scp: %w", err)
	}

	if err := sh.Run("ssh", "mickey@blizzy.de", "~/update-maikschreiber.sh"); err != nil {
		return fmt.Errorf("update-maikschreiber.sh: %w", err)
	}

	return nil
}
