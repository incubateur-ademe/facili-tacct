import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    "id": "erlang",
    "label": "erlang",
    "value": 469,
    "color": "hsl(63, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 445,
    "color": "hsl(34, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 76,
    "color": "hsl(194, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 265,
    "color": "hsl(52, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 462,
    "color": "hsl(178, 70%, 50%)"
  }
]

const PieChartCatnat = () => (
  <div style={{ height: "500px", minWidth: "450px", backgroundColor: "white" }}>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
    />
  </div>
)

export default PieChartCatnat;
