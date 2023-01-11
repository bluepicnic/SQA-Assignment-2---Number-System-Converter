{ pkgs }: {
  deps = [
    pkgs.yarn
    pkgs.yarn
    pkgs.nodejs-16_x
    pkgs.yarn install
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}