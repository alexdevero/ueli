import { exec } from 'child_process';

export default class CommandLineExecutor {
    constructor() {
        this.cmdPath = 'C:\\Windows\\System32\\cmd.exe';
    }

    isValid(input) {
        if (input.startsWith('>'))
            return true;

        return false;
    }

    execute(command) {
        command = command.replace('>', '').toLowerCase();
        command = `start cmd /K ${command}`;

        exec(command, (error, stdout, stderr) => {
            if (error)
                throw error;
        });
    }

    getInfoMessage(command) {
        command = command.toLowerCase().replace('>', '');
        return `<div>
                    <p class="result-name">Command Prompt: ${command}</p>
                    <p class="result-description">${this.cmdPath} /K ${command}</p>
                </div>`;
    }

    getIcon() {
        return 'fa fa-terminal';
    }
}