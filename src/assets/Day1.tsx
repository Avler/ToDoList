import {nanoid} from "nanoid"

export  const Days: {
    name: string;
    selected: boolean;
    id: number | string;
    checked:boolean;
    day:string;
}[] = 
    [{
        name: "Mon",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day1"
    },
    {
        name: "Tue",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day2"
    },
    {
        name: "Wed",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day3"
    },
    {
        name: "Thu",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day4"
    },
    {
        name: "Fri",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day5"
    },
    {
        name: "Sat",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day6"
    },
    {
        name: "Sun",
        selected:false,
        id:nanoid(),
        checked:false,
        day:"/day7"
    }
]

