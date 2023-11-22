


import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
const data = [

  {
    "id": "france",
    "color": "hsl(221, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 2
      },
      {
        "x": "helicopter",
        "y": 149
      },
      {
        "x": "boat",
        "y": 87
      },
      {
        "x": "train",
        "y": 130
      },
      {
        "x": "subway",
        "y": 213
      },
      {
        "x": "bus",
        "y": 182
      },
      {
        "x": "car",
        "y": 269
      },
      {
        "x": "moto",
        "y": 20
      },
      {
        "x": "bicycle",
        "y": 233
      },
      {
        "x": "horse",
        "y": 298
      },
      {
        "x": "skateboard",
        "y": 37
      },
      {
        "x": "others",
        "y": 274
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(7, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 152
      },
      {
        "x": "helicopter",
        "y": 110
      },
      {
        "x": "boat",
        "y": 264
      },
      {
        "x": "train",
        "y": 28
      },
      {
        "x": "subway",
        "y": 1
      },
      {
        "x": "bus",
        "y": 230
      },
      {
        "x": "car",
        "y": 153
      },
      {
        "x": "moto",
        "y": 123
      },
      {
        "x": "bicycle",
        "y": 275
      },
      {
        "x": "horse",
        "y": 52
      },
      {
        "x": "skateboard",
        "y": 41
      },
      {
        "x": "others",
        "y": 32
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(313, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 156
      },
      {
        "x": "helicopter",
        "y": 5
      },
      {
        "x": "boat",
        "y": 170
      },
      {
        "x": "train",
        "y": 270
      },
      {
        "x": "subway",
        "y": 117
      },
      {
        "x": "bus",
        "y": 47
      },
      {
        "x": "car",
        "y": 96
      },
      {
        "x": "moto",
        "y": 267
      },
      {
        "x": "bicycle",
        "y": 197
      },
      {
        "x": "horse",
        "y": 265
      },
      {
        "x": "skateboard",
        "y": 24
      },
      {
        "x": "others",
        "y": 249
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(346, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 276
      },
      {
        "x": "helicopter",
        "y": 284
      },
      {
        "x": "boat",
        "y": 11
      },
      {
        "x": "train",
        "y": 160
      },
      {
        "x": "subway",
        "y": 176
      },
      {
        "x": "bus",
        "y": 126
      },
      {
        "x": "car",
        "y": 125
      },
      {
        "x": "moto",
        "y": 92
      },
      {
        "x": "bicycle",
        "y": 16
      },
      {
        "x": "horse",
        "y": 173
      },
      {
        "x": "skateboard",
        "y": 169
      },
      {
        "x": "others",
        "y": 145
      }
    ]
  }
]
const Line = ({isDashboard = false}) => {
  const theme=useTheme()
  return (
    <Box sx={{height:isDashboard? "280px" :"75vh"}}>
    <ResponsiveLine
    data={data}
    curve="catmullRom"
    theme={{
    
      "text": {
      "textColor":"red",
          "fontSize": 11,
          "fill": theme.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "axis": {
          "domain": {
              "line": {
                  "stroke":theme.palette.divider,
                  "strokeWidth": 1
              }
          },
          "legend": {
              "text": {
                  "fontSize": 12,
                  "fill": theme.palette.text.secondary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "ticks": {
              "line": {
                  "stroke": theme.palette.divider,
                  "strokeWidth": 1
              },
              "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.secondary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "grid": {
          "line": {
              "stroke": theme.palette.divider,
              "strokeWidth": 0
          }
      },
      "legends": {
          "title": {
              "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          },
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "ticks": {
              "line": {},
              "text": {
                  "fontSize": 10,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              }
          }
      },
      "annotations": {
          "text": {
              "fontSize": 13,
              "fill": theme.palette.text.primary,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          },
          "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
          }
      },
      "tooltip": {
          "container": {
              "background": theme.palette.background.default,
              "color": theme.palette.text.primary,
              "fontSize": 12
          },
          "basic": {},
          "chip": {},
          "table": {},
          "tableCell": {},
          "tableCellValue": {}
      }
  }}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:isDashboard?null : 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend:isDashboard?null :'Count',
        legendOffset: -45,
        legendPosition: 'middle'
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/>
</Box>
  );
}

export default Line;
