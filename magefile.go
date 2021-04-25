//+build mage

package main

import (
	"context"

	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

// Dev runs Gatsby in development mode.
func Dev() error {
	return sh.RunV("gatsby", "develop")
}

// Build runs Gatsby to build the application.
func Build() error {
	return sh.Run("gatsby", "build")
}

// Deploy updates the live server with a new build of the application.
func Deploy(ctx context.Context) error {
	mg.CtxDeps(ctx, Build)

	if err := sh.Run("tar", "cjpf", "maikschreiber.tar.bz2", "public"); err != nil {
		return err
	}
	defer sh.Rm("maikschreiber.tar.bz2")

	if err := sh.Run("scp", "maikschreiber.tar.bz2", "mickey@blizzy.de:"); err != nil {
		return err
	}

	return sh.Run("ssh", "mickey@blizzy.de", "~/update-maikschreiber.sh")
}
