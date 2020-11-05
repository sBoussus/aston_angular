interface Player {
    firstname: string;
    lastname: string;
    num?: number; // "?:"" indique une clé facultative
    injured: boolean;
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

export { Player, Todo };