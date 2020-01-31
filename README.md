## Introduction

'Performance Calculator' is a web app designed to compute the following car performance statistic times:
0-60, 0-100, 60-100 and the Quarter Mile.

## Getting Started

```bash
> git clone git@github.com:FrankieBoye/performance_calculator.git
> cd performance_calculator
> npm install
> npm start
```
Navigate to [localhost:3000](http://localhost:3000/) on your web browser.

## Usage
When the app is completed, you will be able to select the driven wheels for your car, enter the flywheel horsepower (BHP) and the kerb weight in KG. The calculator will then compute the performance times.

Work in progress!

![image](https://user-images.githubusercontent.com/44870179/73573484-5cf57100-446b-11ea-903c-412c30120ae5.png)

#### Update

I have met my MVP and can calculate the 0-60 time!

There is still plenty of work to do.<br>
1. Tests have to be written for the code.

2. I need to find some way of permanently highlighting the selected drivetrain button using the buttons state. Currently when the focus changes to type in weight or bhp, the highlight disappears.

3. I need to come up with formulas to calculate my other performance criteria.

## Deployment

The application will be deployed on Heroku.
