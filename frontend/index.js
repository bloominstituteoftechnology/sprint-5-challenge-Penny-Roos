async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  async function combinedLearnersFn() {
    try {

      let [learners, mentors] = await Promise.all([axios.get("http://localhost:3003/api/learners"), axios.get("http://localhost:3003/api/mentors")])
      let result = []
      learners = learners.data.map(learner => {
        learner.mentors.forEach((learnerId, idx) => {
          mentors.data.forEach(mentor => {
            if (mentor.id == learnerId) {
              learner.mentors[idx] = `${mentor.firstName} ${mentor.lastName}`
            }
          })
        })
        result.push(learner)
        console.log(learner.id)
      })
      return result
    } catch (err) {
      console.log(err)
    }

  }








  const combinedLearners = await combinedLearnersFn()
  console.log(combinedLearners)
  const cardDiv = document.createElement("div")
  cardDiv.classList.add("cards")
  const section = document.querySelector("section")
  section.appendChild(cardDiv)
  combinedLearners.forEach(learner => {
    const learnerCards = buildLearnerCard(learner)
    cardDiv.appendChild(learnerCards)
  })
  



  function buildLearnerCard(learner) {
    const card = document.createElement("div");
    card.classList.add("card");
    let name = document.createElement("h3");
    name.textContent = learner.fullName; // Display learner's full name
    const email = document.createElement("div");
    email.textContent = learner.email;
    const lMentors = document.createElement("h4");
    lMentors.classList.add("closed");
    lMentors.textContent = `Mentors`;
  
    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(lMentors);
  
    card.addEventListener("click", function (event) {
      const infoSection = document.querySelector(".info");
      infoSection.textContent = `The selected learner is ${learner.fullName}`;
  
      if (!card.classList.contains("selected")) {
        name.textContent = `${learner.fullName}, ID: ${learner.id}`; // Include learner's ID in the heading
        card.classList.add("selected");
        lMentors.classList.replace("closed", "open");
      } else {
        name.textContent = learner.fullName; // Revert to displaying only the learner's full name
        card.classList.remove("selected");
        lMentors.classList.replace("open", "closed");
      }
      event.stopPropagation(); // Prevent event from bubbling up and closing other mentor lists
    });
  
    return card;
  }
  
  























  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
