---
title: Exercise 5 - Create Parameters and Output
description: Next Level Data Preparation
---
### 💡 Key Points

* A parameter is a global placeholder value such as a number, text value, or boolean value that can replace a constant value in a flow.
* You can use parameters to filter data or dynamically change strings, like filenames.
* Tableau Prep Builder versions 2021.4.1 and later support the use of parameters in flows.
* Tableau Cloud and Tableau Server versions 2021.4.0 and later can run flows containing parameters.

### 📙 Resource Quick Links

* [Tableau Documentation - Create and Use Parameters in Flows](https://help.tableau.com/current/prep/en-us/prep_parameters.htm)

Superstore serves the United States and Canada, and the data you’re working with contains information for both countries. You know that your stakeholders will likely ask you to divide the data into two copies, one for each country. Rather than creating duplicate data sets and doubling up your workload, you decide to add a parameter to filter the data. That way, when analysts from the Operations Team run the flow themselves, they can choose to filter its output for the country team they work with.

After we create the parameter, we’ll need to backtrack in our flow and add a step to filter our data. From there, we’ll tie everything up nicely by adding an Output Step. We’ll complete the following steps:


## 📝 Instructions

### Create and Apply Parameters

* **[Step 1](/../../reference/e5s1sol) –** Create a parameter named ‘Choose a Country’ that allows users to pick between the United States or Canada. The data type will be string, and the allowable values should be stored in a list. The values will be 'United States' and 'Canada'. **Bonus –** add an 'All' value to the parameter as well.
* **[Step 2](/../../reference/e5s2sol) –** Click on input step of our "shipping.csv" data source.
* **[Step 3](/../../reference/e5s2sol) –** Click the Filter Values option at the top of the Profile Pane and add a filter logic that sets the Country/Region field equal to the Choose a Country field. **Bonus –** Create a logic calculation to take the 'All' value and output both countries.

:::note[**🔥 HOT Tip 🔥 –**]
In general, filters in the input step **perform better** when authoring since against a database, they will filter out our initial query. Filtering in step nodes have to pull in a larger sample prior to filtering.
:::


* **Step 4 –** Check to see if your parameter filter worked by clicking on the '5. Top NPS' Clean Step and looking at the Country/Region field. Change the value you’ve selected in your parameter by clicking on it in the toolbar. You should see the Country/Region field adjust depending on whether you selected the United States or Canada.

### Create the Output

* **[Step 4](/../../reference/e5s3sol) –** Add a new Output step at the end of your flow, 
  * Save your output to a "Published Data Source" in the default location
  * Name your output as `TopNPS_Orders_<Choose a Country>`