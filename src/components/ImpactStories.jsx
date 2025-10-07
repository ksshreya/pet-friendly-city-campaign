import React, { useState } from "react";

const stories = [
  {
    id: "story1",
    img: "/images/impact-story1.jpeg",
    title: "A Park for Every Paw",
    desc: "Learn how our volunteers helped create the first dog park in Sunny Meadows!",
    fullDesc: "Thanks to our dedicated volunteers, the first dog park in Sunny Meadows has been completed! Local families and their pets now have a safe, fun space to play and socialize. This initiative has strengthened community bonds and improved pet welfare across the area."
  },
  {
    id: "story2",
    img: "/images/impact-story2.jpeg",
    title: "Happy Homes for Homeless Hounds",
    desc: "Discover the heartwarming stories of rescued pets finding their forever families.",
    fullDesc: "Over the past year, dozens of rescued pets have found loving forever homes through our campaign. Each adoption story is unique, filled with joy and hope, highlighting the importance of responsible pet ownership and community support."
  },
  {
    id: "story3",
    img: "/images/impact-story3.jpeg",
    title: "Pet-Friendly Businesses on the Rise",
    desc: "See how our campaign is encouraging local businesses to welcome our furry companions.",
    fullDesc: "Local businesses are joining our movement by becoming pet-friendly! From cafes to bookstores, these establishments now offer water bowls, treats, and welcoming spaces for pets and their owners, fostering a more inclusive community."
  }
];

const ImpactStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (story) => setSelectedStory(story);
  const closeModal = () => setSelectedStory(null);

  return (
    <section id="impact-stories-section" className="impact-stories-section">
      <h2>Impact Stories</h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <div className="story-card" key={story.id}>
            <img src={story.img} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.desc}</p>
            <button className="read-more" onClick={() => openModal(story)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {selectedStory && (
        <div className="story-modal" onClick={closeModal}>
          <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="story-modal-close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedStory.title}</h2>
            <p>{selectedStory.fullDesc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImpactStories;
