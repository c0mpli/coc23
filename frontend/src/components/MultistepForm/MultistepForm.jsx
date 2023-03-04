import React, { useState } from "react";
const courseObj = {
  name: "",
  age: 0,
  birthday: "",
  gender: "",
  interests: [],
  genderPreferences: [],
  profession: [],
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
];
function MultistepForm(props) {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState(courseObj);
  const [videoData, setVideoData] = useState(videoObj);
  const completeFormStep = () => {
    console.log("clicked");
    console.log(formStep);
    if (formStep > 0) {
      var values = [];
      for (var k in videoData) {
        values.push(videoData[k]);
      }

      formData.videos.push(values);
      setVideoData(videoObj);
    }
    setFormStep(formStep + 1);
  };

  const [counter, setCounter] = useState(0);
  function handleClick() {
    console.log(counter);
    setCounter(counter + 1);
  }
  const handleInput = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]:
        ev.target.name === "duration"
          ? parseInt(ev.target.value, 10)
          : ev.target.value,
    });
  };
  const handleInput2 = (ev) => {
    setVideoData({
      ...videoData,
      [ev.target.name]: ev.target.value,
    });
  };
  return (
    <div>
      <form className="login-form addAdmin">
        {formStep === 0 && (
          <section>
            <h1>Course Details</h1>
            <input
              placeholder="Enter course name"
              type="text"
              name="programname"
              onChange={handleInput}
              value={formData.programname}
              required
            />
            <input
              placeholder="Enter course duration"
              type="number"
              name="duration"
              onChange={handleInput}
              value={formData.duration}
              required
            />
            <input
              placeholder="Enter course description"
              type="text"
              name="description"
              onChange={handleInput}
              value={formData.description}
              required
            />
            <input
              placeholder="Enter course image URL"
              type="text"
              name="image"
              onChange={handleInput}
              value={formData.image}
              required
            />
          </section>
        )}

        {formStep > 0 && (
          <section>
            <h1>Week {formStep}</h1>
            <input
              type="text"
              placeholder="Day 1"
              name="day1"
              onChange={handleInput2}
              value={videoData.day1}
            />
            <input
              type="text"
              placeholder="Day 2"
              name="day2"
              onChange={handleInput2}
              value={videoData.day2}
            />
            <input
              type="text"
              placeholder="Day 3"
              name="day3"
              onChange={handleInput2}
              value={videoData.day3}
            />
            <input
              type="text"
              placeholder="Day 4"
              name="day4"
              onChange={handleInput2}
              value={videoData.day4}
            />
            <input
              type="text"
              placeholder="Day 5"
              name="day5"
              onChange={handleInput2}
              value={videoData.day5}
            />
            <input
              type="text"
              placeholder="Day 6"
              name="day6"
              onChange={handleInput2}
              value={videoData.day6}
            />
            <input
              type="text"
              placeholder="Day 7"
              name="day7"
              onChange={handleInput2}
              value={videoData.day7}
            />
          </section>
        )}

        {(formStep != formData.duration + 1 || formStep === 0) && (
          <button onClick={() => completeFormStep()} type="button">
            Next
          </button>
        )}
        {formStep === formData.duration + 1 && formStep > 0 && (
          <button onClick={submitForm} type="button">
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default MultistepForm;
