import * as childProcess from "child_process";
import * as path from "path";

export const joinRoot = (p: string) => path.join(__dirname, "../", p);

export const execRaw = ({ raw: { 0: cmd } }: Readonly<TemplateStringsArray>) =>
    childProcess.execSync(cmd.trim(), {
        cwd: joinRoot(""),
        encoding: "utf8",
        stdio: "inherit",
    });
