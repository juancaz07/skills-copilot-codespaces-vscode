function skillsmembers() {
    var member = {
        name: "Micheal",
        age: 22,
        skills: {
            coding: ["JavaScript", "HTML", "CSS"],
            design: ["Photoshop", "Illustrator"]
        }
    };
    var member2 = {
        name: "John",
        age: 25,
        skills: {
            coding: ["JavaScript", "HTML", "CSS"],
            design: ["Photoshop", "Illustrator"]
        }
    };
    // write a function to display skills of members
    function displaySkills(member, member2) {
        console.log(member.skills.coding, member.skills.design);
        console.log(member2.skills.coding, member2.skills.design);
    }
    displaySkills(member, member2);
}