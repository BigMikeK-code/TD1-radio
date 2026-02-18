<div id="td1-random-ad" style="text-align:center; margin:20px 0;">
  <a id="td1-ad-link" href="#" target="_blank" rel="noopener">
    <img id="td1-ad-image" src="" alt="TD1 Radio Advert" 
         style="max-width:100%; height:auto; border-radius:12px;">
  </a>
</div>

<script>
  const adverts = [
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser1.co.uk"
    },
    {
      image: "hhttps://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser2.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser3.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser4.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser5.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser6.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.pngg",
      link: "https://advertiser7.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser8.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser9.co.uk"
    },
    {
      image: "https://cdn.jsdelivr.net/gh/BigMikeK-code/TD1-radio@presenters/kariningram.png",
      link: "https://advertiser10.co.uk"
    }
  ];

  const randomAd = adverts[Math.floor(Math.random() * adverts.length)];

  document.getElementById("td1-ad-image").src = randomAd.image;
  document.getElementById("td1-ad-link").href = randomAd.link;
</script>
