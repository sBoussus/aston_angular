interface Player {
    firstname: string;
    lastname: string;
    num?: number; // "?:"" indique une clé facultative
    injured: boolean;
}

export { Player };