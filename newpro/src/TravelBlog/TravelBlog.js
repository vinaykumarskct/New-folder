import React, { useState } from 'react';
import '../TravelBlog/TravelBlog.css'

const ShowMoreLess = ({ content }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <p>{showMore ? content : `${content.slice(0, 50)}... `}</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Read less' : 'Read more'}
      </button>
      
    </div>
  );
};

const TravelBlog = () => {
  return (
    <div>
      <a href='/Home'></a><button onclick>BACK</button><a/>
      <div>
      <h1>DESTINATONS</h1>
      </div>

      <div class="blog-wrapper">
        {/* You can integrate ShowMoreLess inside each blog card */}
        <div class="blog-card">
          <div class="card-img">
            <li><a href="/card1">Learn more</a></li>
            <img src="https://images.pexels.com/photos/189833/pexels-photo-189833.jpeg?cs=srgb&dl=pexels-zhang-kaiyv-189833.jpg&fm=jpg" alt="" />
            <h1>China</h1>
          </div>
          <div class="card-details">
          
           <h3> “Let China Sleep, for when she wakes, she will shake the world”</h3> 
           <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
            
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content="The Great Wall of China, The Forbidden City, Imperial Palace, The Terracotta Army, The Summer Palace, Li River, Guilin, Chengdu Research Base of Giant Panda Breeding, Yangtze River and the Three Gorges and many more." /></i>
        </div>
        {/* Continue adding other blog cards */}
        <div class="blog-card">
          <div class="card-img">
          <li><a href="/card2">Learn more</a></li>
            <img src="https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?cs=srgb&dl=pexels-%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D1%82%D1%80%D0%B5%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-8285167.jpg&fm=jpg" alt="" />
            <h1>New York</h1>
          </div>
          <div class="card-details">
            <h3>“This isn’t just a fairytale. It’s New York City.”</h3>
            <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
         <i> <ShowMoreLess content="New York, often called New York City[b] or simply NYC, is the most populous city in the United States, located at the southern tip of New York State on one of the world's largest natural harbors." />
         </i>
         <br></br>
        </div>
        {/* Continue adding other blog cards */}
        <div class="blog-card">
          <div class="card-img">
          <li><a href="/card">Learn more</a></li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg204zYIE1oiXZYVOuBPmsw_UpVA40fMCRA&usqp=CAU" alt="" />
            <h1>Africa</h1>
          </div>
          <div class="card-details">
            <h3>“Everything in Africa bites, but the safari bug is worst of all.”</h3>
            <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content="Africa is the world's second-largest and second-most populous continent after Asia.The continent is surrounded by the Mediterranean Sea to the north, the Isthmus of Suez and the Red Sea to the northeast, the Indian Ocean to the southeast and the Atlantic Ocean to the west." /></i>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VoieWVzaBi43PfqgJIA8m_iBp6tjCWJNMQ&usqp=CAU" alt="" />
            <h1>America</h1>
          </div>
          <div class="card-details">
            <h3>“How can a nation be called great if its bread tastes like kleenex?”</h3>
            <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content="The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America, between Canada and Mexico. It is a liberal democracy and republic of 50 federated states, a federal capital district (Washington, D.C.), and 326 Indian reservations that overlap with state boundaries." /></i>
        </div>
        <br></br>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/AHF2FYISNJO55J6N35YJBZ2JYY.jpg" alt="" />
            <h1>Paris</h1>
          </div>
          <div class="card-details">
           <h3>“Paris is well worth a Mass.”</h3>
           <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content="Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, and gastronomy. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light" /></i>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://cdn.pixabay.com/photo/2015/04/25/12/39/girls-739071_640.jpg" alt="" />
            <h1>Netherland</h1>
          </div>
          <div class="card-details">
            <h3>If you can't go to Indonesia for its food, go to Amsterdam.” </h3>
            <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content=" it borders Germany to the east and Belgium to the south, with a North Sea coastline to the north and west. It has a border with France on the split island of Saint Martin in the Caribbean. It shares maritime borders with the United Kingdom, Germany, and Belgium.[17] The official language is Dutch, with West Frisian as a secondary official language in the province of Friesland." /></i>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://www.travelturtle.world/wp-content/uploads/2023/04/Srilanka-Slide-1.jpg" alt="" />
            <h1>Sri Lanka</h1>
          </div>
          <div class="card-details">
           <h3> "In Sri Lanka a well-told lie is worth a thousand facts."</h3>
           <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content="Sri Lanka has a population of approximately 22 million and is home to many cultures, languages and ethnicities. The Sinhalese people form the majority of the population, followed by the Sri Lankan Tamils, who are the largest minority group and are concentrated in northern Sri Lanka; both groups have played an influential role in the island's history." /></i>
        <br></br>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="data:image/jpeg;base64,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" alt="" />
            <h1>Antarctica</h1>
          </div>
          <div class="card-details">
           <h3>"If Antarctica were music it would be Mozart."</h3>
           <div class="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label for="5-stars" class="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label for="4-stars" class="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label for="3-stars" class="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label for="2-stars" class="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label for="1-star" class="star">&#9733;</label>
</div>
          </div>
          {/* Using ShowMoreLess here */}
          <i><ShowMoreLess content="Antarctica is, on average, the coldest, driest, and windiest of the continents, and it has the highest average elevation. It is mainly a polar desert, with annual precipitation of over 200 mm (8 in) along the coast and far less inland. About 70% of the world's freshwater reserves are frozen in Antarctica, which, if melted, would raise global sea levels by almost 60 metres (200 ft)." /></i>
        </div>
        
      </div>
    </div>
  );
};

export default TravelBlog;