export interface JobProfile {
    title:                   string;
    quote:                   string;
    level_of_responsibility: LevelOfResponsibility;
    key_attributes:          KeyAttributes;
    role_focuses:            RoleFocusScale[];
    core_competencies:       string[];
    key_responsibilities:    string[];
}

export interface KeyAttributes {
    [key: string]: string;

}

export interface LevelOfResponsibility {
    [key: string]: Responsibility;
}

export interface Responsibility {
    description: string;
    values:      number[];
}

export interface RoleFocusScale {
    scale: Scale;
    value: number;
}

export interface Scale {
    from: string;
    to:   string;
}