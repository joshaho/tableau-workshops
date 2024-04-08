---
title: ✏️ Exercise 1 - Connect to Data - The Input Step
description: Next Level Data Preparation
---
# 

### 💡 Key Points

* You can connect to a variety of on-prem and cloud-based data sources natively in Tableau Prep Builder using out-of-the-box connectors.
* There are options to filter, hide or remove fields, change data types, update sampling logic, and many more transformations on the Input Step.
* It’s a good idea to configure your Input Step to bring in just the data you need so that your Flow remains performant.

### 📙 Resource Quick Links

* [Tableau Documentation - Connect to Data](https://help.tableau.com/current/prep/en-us/prep_connect.htm)

## 🎯 Your Task

As mentioned, you’ll be working with **4** files that represent **2** data sources: Orders (Orders1.csv, Orders2.csv, Orders3.csv) and Shipping (Shipping.csv).
To get started:


* Double click on the Prep Builder icon on your VM desktop to open the application.
* We are going to build a flow from scratch, so you will click on the blue ‘Connect to Data’ button.
* You can connect to a number of different data sources; because our data are in CSV files, you will select the ‘Text File’ option.
* In the ‘Open’ window, navigate to the ‘Data Sources’ file on the desktop and select orders1.csv.

## 📝 Instructions

* **Step 1 –** Create **one** Input Step for Orders that unions all 3 of the orders files. Use File Filters and syntax matching to bring in only the Orders files and not the Shipping file for the Orders Input Step. The files are in a folder called *'Data Sources'* on the desktop of your machine. 

[How to create a file input and union](../../src/assets/gifs/1.1-union.gif)


* **Step 2 –** On the Orders Input Step, add a relative date filter to the Order Date field that brings in only the data from the year 2023.

    >[!hint][How to create a relative date filter](../../src/assets/gifs/1.2-datefilter.gif)


* **Step 3 –** Create an Input Step for the shipping file. You do not need to make any changes to this Input Step.

    >[!hint][How to add in a single file input](../../src/assets/gifs/1.3-single-input.gif)
