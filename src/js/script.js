// API call
// API  I am useing
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

// test URL : https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/aka2026gsltwi.geojson

const showMap = async function () {
  try {
    const res = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(data);

    const quakeData = data.features.map(feature => ({
      id: feature.id,
      location: feature.properties.place,
      mag: feature.properties.mag,
    }));

    console.log(quakeData);
  } catch (err) {
    alert(err);
  }
};

showMap();
