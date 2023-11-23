import { JobProfile } from "./JobProfile";

export function parseJobProfile(markdownText: string) {
    const lines = markdownText.split('\n');
    let cursor = 0;

    const nextLine = (): string => lines[cursor++];
    const peekLine = (): string => lines[cursor+1];

    const jobProfile: JobProfile = {
        title: '',
        quote: '',
        level_of_responsibility: {
            Autonomy: { description: '', values: [] },
            Complexity: { description: '', values: [] },
            Influence: { description: '', values: [] },
            Knowledge: { description: '', values: [] }
        },
        key_attributes: {
            Scope: '',
            Drive: '',
            Style: '',
            Communication: '',
            "Leadership/Engagement": ''
        },
        role_focuses: [],
        core_competencies: [],
        key_responsibilities: []
    };

    const titleRegex = /^#\s*(.+)/;
    const listItemRegex = /^\s*-\s*(.+?):\s*(.+)/;
    const autonomyRegex = /\(([\d\/]+)\)/;
    
    const titleMatch = nextLine().match(titleRegex);
    if (titleMatch) {
        jobProfile.title = titleMatch[1].trim();
    } else {
        throw new Error('Title not found in markdown');
    }

    while (cursor < lines.length) {
        const line = nextLine();

        if (line.includes('Level of Responsibility')) {
            let next = nextLine();
            while (next.startsWith('-') && next.trim().length > 0 && cursor < lines.length) {
                const match = next.match(listItemRegex);
                if (match) {
                    const key = match[1].trim();
                    const descMatch = match[2].match(autonomyRegex);
                    if (descMatch && jobProfile.level_of_responsibility[key]) {
                        jobProfile.level_of_responsibility[key].description = match[2].replace(autonomyRegex, '').trim();
                        jobProfile.level_of_responsibility[key].values = descMatch[1].split('/').map(Number); // Splitting and converting to numbers
                    } else {
                        throw new Error(`Invalid format in Level of Responsibility for ${key}`);
                    }
                }
                next = nextLine();
            }
        } else if (line.includes('Key Attributes')) {
            let next = nextLine();
            while (!peekLine().trim().startsWith("## ") && cursor < lines.length) {
                const key = next.trim().substring(4);
                const value = nextLine();
                next = value;
                jobProfile.key_attributes[key] = value;
            }
        }
        else if (line.includes('Quote')) {
            let next = nextLine();
            jobProfile.quote = next;
        }
        else if (line.includes('Role Focus')) {
            let next = nextLine();
            while (next.startsWith('-') && next.trim().length > 0 && cursor < lines.length) {
                const match = next.match(/^\s*-\s*(.+)\s+vs\s+(.+):\s*(\d+(?:\.\d+)?)/);
                if (match) {
                    jobProfile.role_focuses.push({
                        scale: { from: match[1].trim(), to: match[2].trim() },
                        value: parseFloat(match[3])
                    });
                }
                next = nextLine();
            }
        } else if (line.includes('Core Competencies')) {
            let next = nextLine();
            while (next.trim().startsWith('-') && next.trim().length > 0 && cursor < lines.length) {
                jobProfile.core_competencies.push(next.trim().substring(1).trim());
                next = nextLine();
            }
        } else if (line.includes('Key Responsibilities')) {
            let next = nextLine();
            while (next.trim().startsWith('-') && cursor < lines.length) {
                jobProfile.key_responsibilities.push(next.trim().substring(1).trim());
                next = nextLine();
            }
        }
    }
    
    return jobProfile;
}