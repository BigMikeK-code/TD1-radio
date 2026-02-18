<div id="td1-random-ad" style="text-align:center; margin:20px 0;">
  <a id="td1-ad-link" href="#" target="_blank" rel="noopener">
    <img id="td1-ad-image" src="" alt="TD1 Radio Advert" 
         style="max-width:100%; height:auto; border-radius:12px;">
  </a>
</div>

<script>
  const adverts = [
    {
      image: "https://yourwebsite.co.uk/adverts/advert1.jpg",
      link: "https://advertiser1.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert2.jpg",
      link: "https://advertiser2.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert3.jpg",
      link: "https://advertiser3.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert4.jpg",
      link: "https://advertiser4.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert5.jpg",
      link: "https://advertiser5.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert6.jpg",
      link: "https://advertiser6.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert7.jpg",
      link: "https://advertiser7.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert8.jpg",
      link: "https://advertiser8.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert9.jpg",
      link: "https://advertiser9.co.uk"
    },
    {
      image: "https://yourwebsite.co.uk/adverts/advert10.jpg",
      link: "https://advertiser10.co.uk"
    }
  ];

  const randomAd = adverts[Math.floor(Math.random() * adverts.length)];

  document.getElementById("td1-ad-image").src = randomAd.image;
  document.getElementById("td1-ad-link").href = randomAd.link;
</script>
