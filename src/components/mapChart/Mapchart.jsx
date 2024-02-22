import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import {MapChart,MapPolygonSeries,MapPointSeries} from '@amcharts/amcharts5/map';

export const Mapchart = () => {
  useEffect(() => {
    const map = MapChart.new("map-div", {
      panX: "none",
      projection: "geoNaturalEarth1"
    });

    const polygonSeries = map.series.push(MapPolygonSeries.new());
    polygonSeries.set("fill", am5.color(0xbbbbbb));

    const pointSeries = map.series.push(MapPointSeries.new());

    const colorSet = am5.ColorSet.new({ step: 2 });

    pointSeries.set("bullets", (root, series, dataItem) => {
      const value = dataItem.get("value");
      const container = root.children.push(am5.Container.new());
      const color = colorSet.next();
      const radius = 15 + value / 20 * 20;
      const circle = container.children.push(am5.Circle.new({
        radius: radius,
        fill: color,
        dy: -radius * 2
      }));

      const pole = container.children.push(am5.Line.new({
        stroke: color,
        height: -40,
        strokeGradient: am5.LinearGradient.new({
          stops: [
            { opacity: 1 },
            { opacity: 1 },
            { opacity: 0 }
          ]
        })
      }));

      const label = container.children.push(am5.Label.new({
        text: value + "M",
        fill: am5.color(0xffffff),
        fontWeight: "400",
        centerX: am5.p50,
        centerY: am5.p50,
        dy: -radius * 2
      }));

      const titleLabel = container.children.push(am5.Label.new({
        text: dataItem.get("title"),
        fill: color,
        fontWeight: "500",
        fontSize: "1em",
        centerY: am5.p50,
        dy: -radius * 2,
        dx: radius
      }));

      return am5.Bullet.new({
        sprite: container
      });
    });

    const data = [{
      "title": "Saudi Arabia ",
      "latitude": 23.8859,
      "longitude": 45.0792,
      "width": 100,
      "height": 100,
      "value": 12
    }, {
      "title": "Egypt",
      "latitude": 26.8206,
      "longitude": 30.8025,
      "width": 50,
      "height": 50,
      "value": 15
    }];

    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      pointSeries.data.push({
        "geometry": { "type": "Point", "coordinates": [d.longitude, d.latitude] },
        "title": d.title,
        "value": d.value
      });
    }

    return () => {
      map.dispose();
    };
  }, []);

  return <div id="map-div" />;
};

