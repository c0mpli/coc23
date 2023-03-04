import React, { useState } from "react";
import "../../pages/AboutYou.css";
const courseObj = {
  name: "",
  age: 0,
  birthday: "",
  gender: "",
  interests: [],
  genderPreferences: [],
  profession: "",
  image: "",
  tagline: "",
  bio: "",
};
const videoObj = {};
const interestData = [
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Swimming",
  },
  {
    icon: "",
    title: "Photography",
  },
  {
    icon: "",
    title: "Football",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
  {
    icon: "",
    title: "Badmintion",
  },
];
function MultistepForm(props) {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState(courseObj);
  const completeFormStep = () => {
    if (formStep == 2) {
      //submit data
      return;
    }
    setFormStep((curr) => curr + 1);
  };

  const handleInput = (ev) => {
    console.log(ev.target.style.backgroundColor);
    setFormData({
      ...formData,
      [ev.target.name]:
        ev.target.name === "age"
          ? parseInt(ev.target.value, 10)
          : ev.target.value,
    });
  };
  function handleInput2(ev) {
    const t2 = { ...formData };
    t2.profession = ev;
    setFormData(t2);
  }

  function handleInterests(title) {
    if (formData.interests && !formData.interests.includes(title)) {
      const t2 = { ...formData };
      t2.interests = [...t2.interests, title];
      setFormData(t2);
    } else {
      const i = formData.interests.indexOf(title);
      const t2 = { ...formData };
      t2.interests.splice(i, 1);
      setFormData(t2);
    }
  }
  function handleGenderInterest(title) {
    if (
      formData.genderPreferences &&
      !formData.genderPreferences.includes(title)
    ) {
      const t2 = { ...formData };
      t2.genderPreferences = [...t2.genderPreferences, title];
      setFormData(t2);
    } else {
      const i = formData.genderPreferences.indexOf(title);
      const t2 = { ...formData };
      t2.genderPreferences.splice(i, 1);
      setFormData(t2);
    }
  }

  return (
    <div className="multistep-wrapper">
      <form className="login-form multistep-form">
        {formStep === 0 && (
          <section>
            <h1>Course Details</h1>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
            />
            <input
              placeholder="Age"
              type="number"
              name="age"
              onChange={handleInput}
              value={formData.age}
            />
            <input
              placeholder="Birthday (DD/MM/YY)"
              type="text"
              name="birthday"
              onChange={handleInput}
              value={formData.birthday}
            />
            <input
              placeholder="Gender"
              type="text"
              name="gender"
              onChange={handleInput}
              value={formData.gender}
            />
          </section>
        )}
        {formStep === 1 && (
          <>
            <p>{"Interests (upto 10)"}</p>
            <section className="aboutyou-interests">
              {interestData.map((value, key) => {
                return (
                  <div
                    className="interest-select"
                    key={key}
                    id={`multistep${key}`}
                    style={{ backgroundColor: "white" }}
                    onClick={() => {
                      handleInterests(value.title);
                      const d = document.querySelector(`#multistep${key}`);
                      d.style.backgroundColor =
                        d.style.backgroundColor == "white" ||
                        d.style.backgroundColor == "transparent"
                          ? "#CBFFE4"
                          : "white";
                    }}
                  >
                    <img src={value.icon} />
                    {value.title}
                  </div>
                );
              })}
            </section>
            <p>{"Gender Preference"}</p>
            <section className="aboutyou-interests">
              {["Male", "Female", "Others"].map((value, key) => {
                return (
                  <div
                    className="interest-select"
                    key={key}
                    onClick={() => {
                      handleGenderInterest(value);
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </section>
            <p>{"Profession"}</p>
            <section className="aboutyou-interests">
              {[
                "Student",
                "Working Professional",
                "Business",
                "Unemployed",
              ].map((value, key) => {
                return (
                  <div
                    className="interest-select"
                    key={key}
                    id="profession"
                    onClick={() => {
                      handleInput2(value);
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </section>
          </>
        )}
        {formStep === 2 && (
          <section>
            <p>Face verification</p>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInput}
            />
            <p>Tagline</p>
            <input
              type="text"
              name="tagline"
              onChange={handleInput}
              placeholder="One-liner that best describes you."
            />
            <p>Bio</p>
            <input
              type="text"
              name="bio"
              onChange={handleInput}
              placeholder="A short bio about you."
            />
          </section>
        )}
        <pre>{JSON.stringify(formData)}</pre>
        {formStep < 3 && (
          <button onClick={() => completeFormStep()} type="button">
            {formStep == 2 ? "Submit" : "Next"}
          </button>
        )}
      </form>
    </div>
  );
}

export default MultistepForm;
