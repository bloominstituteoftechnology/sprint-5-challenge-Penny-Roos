async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  axios.get("http://localhost:3003/api/learners")
  .then(response => {
console.log(response.data)
document.querySelector(".info").textContent = "No learner is selected"
})
   const learners = [
{id: 6, fullName: 'Bob Johnson', email: 'bob.johnson@example.com', mentors: Array(2)},
{id: 52, fullName: 'Samantha Richards', email: 'samantha.richards@example.com', mentors: Array(2)}, 
{id: 84, fullName: 'Harry Potter', email: 'harry.potter@example.com', mentors: Array(2)}, 
{id: 18, fullName: 'Gina Smith', email: 'gina.smith@example.com', mentors: Array(1)}, 
{id: 77, fullName: 'Max Power', email: 'max.power@example.com', mentors: Array(2)}, 
{id: 68, fullName: 'Daisy Duke', email: 'daisy.duke@example.com', mentors: Array(3)},
{id: 1, fullName: 'Jack Sparrow', email: 'jack.sparrow@example.com', mentors: Array(2)},
{id: 48, fullName: 'Homer Simpson', email: 'homer.simpson@example.com', mentors: Array(1)},
{id: 97, fullName: 'Luna Lovegood', email: 'luna.lovegood@example.com', mentors: Array(4)},
{id: 3, fullName: 'Joe Bloggs', email: 'joe.bloggs@example.com', mentors: Array(1)},
{id: 35, fullName: 'Bilbo Baggins', email: 'bilbo.baggins@example.com', mentors: Array(3)},
{id: 29, fullName: 'Marge Simpson', email: 'marge.simpson@example.com', mentors: Array(2)},
{id: 8, fullName: 'Peter Parker', email: 'peter.parker@example.com', mentors: Array(3)},
{id: 57, fullName: 'Betty Boop', email: 'betty.boop@example.com', mentors: Array(3)},
{id: 22, fullName: 'Mickey Mouse', email: 'mickey.mouse@example.com', mentors: Array(1)},
{id: 91, fullName: 'Daffy Duck', email: 'daffy.duck@example.com', mentors: Array(2)}
]
   console.log(learners)
  axios.get("http://localhost:3003/api/mentors")
  .then(res => {
    console.log(res.data)
  })
  const mentors = [
{id: 12, firstName: 'Ada', lastName: 'Lovelace'},
{id: 78, firstName: 'Bill', lastName: 'Gates'},
{id: 63, firstName: 'Brendan', lastName: 'Eich'},
{id: 42, firstName: 'Brian', lastName: 'Kernighan'},
{id: 94, firstName: 'Dan', lastName: 'Ingalls'},
{id: 17, firstName: 'Grace', lastName: 'Hopper'},
{id: 7, firstName: 'Guido', lastName: 'van Rossum'},
{id: 83, firstName: 'James', lastName: 'Gosling'},
{id: 51, firstName: 'Linus', lastName: 'Torvalds'},
{id: 67, firstName: 'Margaret', lastName: 'Hamilton'},
{id: 60, firstName: 'Mark', lastName: 'Zuckerberg'},
{id: 25, firstName: 'Martin', lastName: 'Fowler'},
{id: 88, firstName: 'Mary', lastName: 'Shaw'},
{id: 71, firstName: 'Mitchell', lastName: 'Hashimoto'},
{id: 95, firstName: 'Rasmus', lastName: 'Lerdorf'},
{id: 14, firstName: 'Robert', lastName: 'Martin'},
{id: 32, firstName: 'Sergey', lastName: 'Brin'},
{id: 49, firstName: 'Sheryl', lastName: 'Sandberg'},
{id: 58, firstName: 'Yukihiro', lastName: 'Matsumoto'}
]
console.log(mentors)

const cardDiv = document.createElement("div")
cardDiv.classList.add("cards")
const section = document.querySelector("section")
section.appendChild(cardDiv)



function buildLearnerCard(learner, mentors) {
  const card = document.createElement("div")
  card.classList.add("card")
  let name = document.createElement("h3")
  name.textContent = learner.fullName
  const email = document.createElement("div")
  email.textContent = learner.email
  const lMentors = document.createElement("h3")
  lMentors.classList.add("closed")
  lMentors.textContent = `▶  Mentors`
  
  card.appendChild(name)
  card.appendChild(email)
  card.appendChild(lMentors)
return card
  
  
}
  learners.forEach(learner => {
    const learnerCards = buildLearnerCard(learner, mentors)
    cardDiv.appendChild(learnerCards)
  })
  const learnerCard = document.querySelectorAll(".card")
    learnerCard.forEach(card => {
      card.addEventListener("click", function() {
         this.classList.remove("selected");
        this.classList.add("card selected");
               });
    }); 
    
  
  
  


 
  



 

 
    
    
    
 


  

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
