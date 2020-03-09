## Introduction

'Performance Calculator' is a web app designed to compute the following car performance statistics:
bhp per tonne, 0-60, 0-100 and the Quarter Mile time to the nearest second.

## Getting Started

```
> git clone git@github.com:FrankieBoye/performance_calculator.git
> cd performance_calculator
> npm install
> npm start
```

This should automatically open the application. Otherwise navigate to [localhost:3000](http://localhost:3000/) on your web browser.

## Testing

Cypress end-to-end tests can be run using the following when in the project directory:  

node_modules/.bin/cypress open

![image](https://user-images.githubusercontent.com/44870179/76213877-85f3e900-6203-11ea-9fdf-3115c911abcd.png)

(in progress)

## Usage
Select the driven wheels for your car, enter the flywheel horsepower (BHP) and the kerb weight in KG. The calculator will then compute the figures.

![image](https://user-images.githubusercontent.com/44870179/74101562-18d13300-4b33-11ea-8730-0629a8fb8724.png)

## User stories

```
As a car enthusiast,
So that I can see how my car performs,
I would like to be able to enter the weight and horsepower and be told the bhp per tonne.

As a car enthusiast,
So that I can see how my car performs,
I would like to be able to enter the weight and horsepower and be told the 0-60mph time.

As a car enthusiast,
So that I can see how my car performs,
I would like to be able to enter the weight and horsepower and be told the 0-100mph time.

As a car enthusiast,
So that I can see how my car performs,
I would like to be able to enter the weight and horsepower and be told the 1/4 mile time to the nearest second.

As a car enthusiast,
So that my performance times can be accurately calculated,
I would like to be able to enter the drivetrain configuration.
```

## To do

1. Unit tests have to be written for the code.

2. I need to clarify the meanings of 'RWD' (rear wheel drive), 'FWD' (front wheel drive) and 'AWD' (all wheel drive) on the app. I may break that down further still as there is RR (rear engine rear wheel drive) and FR (front engine rear wheel drive) for example which will have a bearing on the performance times.

3. Formatting, fonts and general styling need refinement.

## Deployment

The application will be deployed on Heroku.
