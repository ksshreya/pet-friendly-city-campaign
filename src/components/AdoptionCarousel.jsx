import React, { useState } from "react";

const pets = [
  {
    id: "buddy",
    img: "/images/Buddy.jpeg",
    name: "Buddy",
    desc: "Buddy is a friendly Golden Retriever with a heart of gold. He loves playing fetch and going for walks. He's looking for a family who will give him lots of love and attention.",
    breed: "Golden Retriever",
    age: "2 years old",
    gender: "Male",
    temperament: "Friendly, playful"
  },
  {
    id: "whiskers",
    img: "/images/Whiskers.jpeg",
    name: "Whiskers",
    desc: "Whiskers is a playful tabby cat who loves to chase laser pointers and take naps in sunny spots. He's looking for a cozy home with a family who will give him lots of love and playtime.",
    breed: "Tabby",
    age: "1 year old",
    gender: "Male",
    temperament: "Playful, affectionate"
  },
  {
    id: "bella",
    img: "/images/Bella.jpeg",
    name: "Bella",
    desc: "Bella is a sweet and gentle calico cat with beautiful markings. She enjoys quiet time and being petted. She's looking for a calm and loving home.",
    breed: "Calico",
    age: "3 years old",
    gender: "Female",
    temperament: "Sweet, gentle"
  },
  {
    id: "max",
    img: "/images/Max.jpeg",
    name: "Max",
    desc: "Max is a fun-loving Labrador puppy with a lot of energy. He loves to play fetch, go for runs, and explore new places. He's looking for an active family who will take him on lots of adventures.",
    breed: "Labrador Retriever",
    age: "6 months old",
    gender: "Male",
    temperament: "Energetic, playful"
  }
];

const AdoptionCarousel = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <section id="adoption-carousel-section" className="adoption-carousel-section">
      <h2>Meet Our Adoptable Friends! 🐶🐱</h2>
      <div className="carousel">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img src={pet.img} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.desc.split(". ")[0]}.</p> {/* Short preview */}
            <button className="adopt-button" onClick={() => setSelectedPet(pet)}>Adopt Me!</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPet && (
        <div className="adoption-modal" style={{ display: "flex" }} onClick={() => setSelectedPet(null)}>
          <div className="adoption-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="adoption-modal-close" onClick={() => setSelectedPet(null)}>&times;</span>
            <h2>Adopt {selectedPet.name}</h2>
            <p>{selectedPet.desc}</p>
            <p><strong>Breed:</strong> {selectedPet.breed}</p>
            <p><strong>Age:</strong> {selectedPet.age}</p>
            <p><strong>Gender:</strong> {selectedPet.gender}</p>
            <p><strong>Temperament:</strong> {selectedPet.temperament}</p>
            <button className="adopt-button">Fill out an adoption application</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdoptionCarousel;
