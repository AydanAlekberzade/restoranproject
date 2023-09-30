import { useState } from 'react';

interface Item {
  title: string;
  photo: string;
  desc: string;
}

const data: Item[] = [
  {
    title: "Our Tea Selection",
    desc: "Tea rituals for health, focus & relaxation",
    photo: "https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/12/soulkitchen-283.jpg"
  },
  {
    title: "Vegan Delights",
    desc: "Our plant based desserts",
    photo: "https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/12/soulkitchen-254.jpg"
  },
  {
    title: "Signature Drinks",
    desc: "Explore the bar",
    photo: "https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/12/soulkitchen-252.jpg"
  }
];

const SixPart = () => {
  const [items, setItems] = useState<Item[]>(data);

  return (
    <div className='sixpart'>
      <div className="row">
        {items.map((item) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-12 col-sm-12 col-md-4"
          >
            <div className='cart'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <img src={item.photo} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixPart;
