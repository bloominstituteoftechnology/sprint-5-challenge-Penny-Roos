async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  a// Function to combine learners with their mentors
async function combinedLearnersFn() {
  try {
      let [learners, mentors] = await Promise.all([axios.get("http://localhost:3003/api/learners"), axios.get("http://localhost:3003/api/mentors")]);
      let result = [];
      learners = learners.data.map(learner => {
          learner.mentors.forEach((learnerId, idx) => {
              mentors.data.forEach(mentor => {
                  if (mentor.id == learnerId) {
                      learner.mentors[idx] = `${mentor.firstName} ${mentor.lastName}`;
                  }
              });
          });
          result.push(learner);
          console.log(learner.id);
      });
      return result;
  } catch (err) {
      console.log(err);
  }
}

// Update the main heading to initially display "No learner is selected"
const mainHeading = document.querySelector(".info");
mainHeading.textContent = "No learner is selected";

// Function to build a learner card with mentor information
function buildLearnerCard(learner) {
  const card = document.createElement("div");
  card.classList.add("card");
  let name = document.createElement("h3");
  name.textContent = learner.fullName;
  const email = document.createElement("div");
  email.textContent = learner.email;
  const lMentors = document.createElement("h4");
  lMentors.classList.add("closed");
  lMentors.textContent = `Mentors`;

  card.appendChild(name);
  card.appendChild(email);
  card.appendChild(lMentors);

  // Event listener to toggle mentor list display
  card.addEventListener("click", function () {
      if (card.classList.contains("selected")) {
          // Display the list of mentors when an open card is clicked again
          const mentorList = document.createElement("ul");
          learner.mentors.forEach(mentor => {
              const mentorItem = document.createElement("li");
              mentorItem.textContent = mentor;
              mentorList.appendChild(mentorItem);
          });
          card.appendChild(mentorList);
      } else {
          // If needed functionality here
      }
  });

  return card;
}

// Event listener for learner cards to toggle selection
const learnerCard = document.querySelectorAll(".card");
learnerCard.forEach(card => {
  card.addEventListener("click", function () {
      learnerCard.forEach(c => {
          c.classList.remove("selected");
      });
      this.classList.add("selected");
  });
});

// Fetch combined learners and display cards
const combinedLearners = await combinedLearnersFn();
const cardDiv = document.createElement("div");
cardDiv.classList.add("cards");
const section = document.querySelector("section");
section.appendChild(cardDiv);
combinedLearners.forEach(learner => {
  const learnerCards = buildLearnerCard(learner);
  cardDiv.appendChild(learnerCards);
});

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
