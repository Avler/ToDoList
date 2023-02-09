import {nanoid} from "nanoid"

export  const Days: {
    name: string;
    selected: boolean;
    id: number | string;
    checked:boolean
}[] = 
    [{
        name: "Mon",
        selected:false,
        id:nanoid(),
        checked:false
    },
    {
        name: "Tue",
        selected:false,
        id:nanoid(),
        checked:false
    },
    {
        name: "Wed",
        selected:false,
        id:nanoid(),
        checked:false
    },
    {
        name: "Thu",
        selected:false,
        id:nanoid(),
        checked:false
    },
    {
        name: "Fri",
        selected:false,
        id:nanoid(),
        checked:false
    },
    {
        name: "Sat",
        selected:false,
        id:nanoid(),
        checked:false
    },
    {
        name: "Sun",
        selected:false,
        id:nanoid(),
        checked:false
    }
]

