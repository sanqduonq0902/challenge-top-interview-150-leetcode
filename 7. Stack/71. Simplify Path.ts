function simplifyPath(path: string): string {
  const part = path.split("/");
  const stack: string[] = [];

  for (const p of part) {
    if (p === "" || p === ".") continue;
    else if (p === "..") stack.pop();
    else stack.push(p);
  }

  return "/" + stack.join("/");
}
