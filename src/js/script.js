// API call
// API  I am useing
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

// test URL : https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/aka2026gsltwi.geojson

const showMap = async function () {
  try {
    const res = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/aka2026gsltwi.geojson",
    );
    const data = await res.json();

    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};

showMap();
