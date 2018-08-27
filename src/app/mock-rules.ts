import { Rule } from './Rule';

export const RULES: Rule[] = [
    
    //Normal Rules
    { title: "seagul", desc: "Every time you throw the ball you have to squeak like a seagul", type: "Normal"},
    { title: "OCD", desc: "Before your turn you have to organize something in the room", type: "Normal"},
    { title: "Flubber", desc: "Bounce the ball at least 3 times before it hits the cup.", type: "Normal"},
    
    //Power rules
    { title: "Long arms", desc: "You can throw with your arms over the table", type: "Power"},
    { title: "Switch", desc: "Hands in the air, throw the ball from the opponents side", type: "Power"},
    { title: "Double", desc: "Hit the cup and choose another cup to take down in the fall", type: "Power"},
    
    //Cursed Rules
    { title: "No can see", desc: "Throw blindfolded", type: "Cursed"},
    { title: "No Hands!", desc: "Throw the ball without using your hands", type: "Cursed"},
    { title: "Walleyyh", desc: "Stand with your back against your closest wall and throw", type: "Cursed"},

    //Counter powerRules
    { title: "Backwards-man", desc: "However you throw the ball, it has to be backwards", type: "Counter"},
    { title: "oops", desc: "If you hit a cup, you actually hit your own", type: "Counter"}

];


