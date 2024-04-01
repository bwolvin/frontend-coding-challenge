const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/api/locations", cors(), (req, res) => {
  res.json({
    status: "success",
    response: [
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 5,
        name: "Mt. Laurel",
        venue_type: "std",
        timezone: "America/New_York",
        details:
          "Welcome to Topgolf Mount Laurel, the premier entertainment destination in Mount Laurel, NJ. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 3,
          amenities: ["free_wifi", "event_spaces"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 7,
        name: "Allen",
        venue_type: "std",
        timezone: "America/Chicago",
        details:
          "Welcome to Topgolf DFW - Allen, the premier entertainment destination in Allen, TX. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 2,
          amenities: ["free_wifi", "event_spaces", "restaurant"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 8,
        name: "Houston Katy",
        venue_type: "std",
        timezone: "America/Chicago",
        details:
          "Welcome to Topgolf Houston - Katy, the premier entertainment destination in Houston, TX. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 2,
          amenities: ["event_spaces", "restaurant"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 9,
        name: "Austin",
        venue_type: "std",
        timezone: "America/Chicago",
        details:
          "Welcome to Topgolf Austin, the premier entertainment destination in Austin, TX. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 3,
          amenities: ["event_spaces", "restaurant", "free_wifi"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 10,
        name: "The Colony",
        venue_type: "std",
        timezone: "America/Chicago",
        details:
          "Welcome to Topgolf DFW - The Colony, the premier entertainment destination in The Colony, TX. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 2,
          amenities: ["free_wifi"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 11,
        name: "Spring",
        venue_type: "std",
        timezone: "America/Chicago",
        details:
          "Welcome to Topgolf Houston - Spring, the premier entertainment destination in Spring, TX. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 2,
          amenities: ["free_wifi", "restaurant"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 12,
        name: "King of Prussia",
        venue_type: "std",
        timezone: "America/New_York",
        details:
          "Welcome to Topgolf King of Prussia, the premier entertainment destination in King of Prussia, PA. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 2,
          amenities: ["event_spaces", "restaurant", "free_wifi"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
      {
        img: "https://s3.topgolf.com/uploads/images/venue/usa/waco/tg-venue-usa-waco-teeline-day.jpg?resize.height=900",
        site_id: 13,
        name: "Scottsdale",
        venue_type: "std",
        timezone: "America/Phoenix",
        details:
          "Welcome to Topgolf Phoenix - Scottsdale, the premier entertainment destination in Scottsdale, AZ. Enjoy our climate-controlled hitting bays for year-round comfort with HDTVs in every bay and throughout our sports bar and restaurant. Using our complimentary clubs or your own, take aim at the giant outfield targets and our high-tech balls will score themselves.",
        features: {
          floors: 3,
          amenities: ["free_wifi", "event_spaces"],
          virtual_tour_link: "https://tour.topgolf.com/v2/45/",
        },
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
