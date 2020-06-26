---
id: billing
title: Billing
---

## Overview

KintoHub uses a `pay-as-you-go` billing similar to Amazon, Google and Azure.
Once a credit card is attached to your account, you will be able to access all the features of KintoHub without any limitations.
KintoHub does not plan to charge for seats, or specific features aside from the three ways your team may utilize the platform.

* **Free** - users may deploy up to **3 services** with up to `256 Mb` and `shared cpu` with minimal limitations
* **Pay-As-You-Go** - users have no limits to what they can deploy on the KintoHub Platform.
* **Private Clusters** - We provide **Startup**, **Small Business** and **Enterprise** licenses to a private version of the KintoHub platform across your company's multi-cloud, multi-region and on-prem hardware.

:::note
Once you have signed up for `pay-as-you-go` billing, you will **NOT** be charged immediately.
All charges are made on the 1st of every month and pro-rated by the second.

All `pay-as-you-go` users gets $10 USD of usage charges waved per month
:::

## Free User Limitations

* May only deploy up to `256 Mb` of memory per service
* May only have `1` environment
* Cannot use **Dedicated CPU**. All services are **Shared CPU** by default
* All services have **Sleep Mode** enabled and will sleep after `1 hour` of inactivty
* Cannot **Auto Scale** your services
* Catalog Persistent Storage is capped at `1Gb` of persistence
* Cannot scale any services to multiple instances or replicas.

## Pay As You Go Benefits

After entering in your credit card, all **Free User Limitations** are lifted.
All `pay-as-you-go` customer's bill will have the following benefits:
 
* The first **10 USD** of cost usage for **any** feature on the platform is waved
* First `3000 minutes` of build & deploy time is waived
* First `100 Gb` of bandwith is waived

Here are some examples that can be deployed for **FREE** after becoming a `pay-as-you-go` user:

* Deploy up to **5 services** with `512 Mb` memory and `shared cpu` enabled.
* Deploy a free full stack application with a **Database**, **Web App** and **Backedn API**

## Billing Operations

### Activate Pay-As-You-Go Billing

1. Login to your account
2. Click on your **Account Icon** at the bottom left of the screen
3. Click **View Plan**
4. Click **Upgrade** under the `pay-as-you-go` plan.
5. Enter in your `name` and `credit card` information
6. Enjoy KintoHub!

### Cancel Pay-As-You-Go Billing

Currently there is no automatic way to cancel due to the complexities of *safely* downgrading your account.
Please [contact us](https://www.kintohub.com/contact-us) to cancel your subscription.

:::note
Self-serviced downgrade functionality is coming in September 2020
:::

### View Invoice & Receipt 

1. Login to your account
2. Click on your `Account Icon` at the bottom left of the screen
3. Click `Billing`
4. Under **Billing History** select the `arrow` next to the invoice date

### Add or Remove Cards

It is not possible to remove your credit card unless you **Cancel** your subscription by following the **Cancel Pay-As-You-Go** billing above.

If you wish to update your subscription with a new card, you may follow these steps:

1. Login to your account
2. Click on your **Account Icon** at the bottom left of the screen
3. Select Billing
4. Under **Payment Method** click `Add payment method`
5. Once your new payment method is added, click `Set Default Payment Method` to your new card
6. Optionally, you may now remove your original card that was on the account.

:::note
This option will not show unless you are a paying user.
:::

## Pricing Overview

All charges are pro-rated per second.
Depending on the type of resources you are being charged for, you are also pro-rated by its type:

* **vCPU** is pro-rated up to 1/10th `10%` of a virtual cpu core.
    * *This means if you select `0.1` vCPU, it will cost you $1.5 USD per month pro rated by the second versus the full cost of $15 USD for a full `100%` dedicated vCPU*
* **Memory** is pro-rated per Mb.
    * *This means if you select `32` Mb of memory, it will cost you $0.09 USD per month pro rated by the second versus the full cost of $3 USD per month*
* **Storage** is pro rated per Mb per second
* **Bandwidth** is pro rated per Mb

:::tip
To learn more of how to estimate your costs, visit the [Advanced Settings](anatomy-advanced.md#max-monthly-cost-estimation) tab.
:::

### CPU Pricing

CPU cost are broken down into three catgories and is charged per second:

* **Shared CPU** - $1 USD /month
* **Dedicated CPU with Optimization Enabled** - $15 USD /month 
* **Dedicated CPU with Optimization Disabled** - $30 USD /month

The smallest amount of **Dedicated CPU** available is `0.1` or `10%` of a CPU core which costs $1.50 USD per month.

### Memory Pricing

Memory cost are broken down into two categories and is charged per second:

* **1 Gb Memory with Optimization Enabled** - $2 USD /month
* **1 Gb Memory with Optimization Disabled** - $7 USD /month

## Storage Pricing

Persistent storage disks sit on solid state drives (SSDs) and are charged per second:

* **1 Gb Storage** - $0.28 (28 cents) /month

:::note
Right now the only storage KintoHub charges for is Catalog Service disks.

In the future it may also include **Backups**, **Build Artifacts** and **Log History** with the option to automatically delete after a specific amount of days.
:::

## Build & Deploy Time Pricing

Build and Deploy tasks are usually heavy operations and are broken down into two categories and are charged per second.

* **First 3000 Build & Deploy Seconds** - FREE!
* **1 Build & Deploy Second** - $0.0000167 per second or $0.001 (1/10th) of a cent per second.

## Bandwidth Pricing

Bandwidth cost are broken down into 3 categories

* **Static Websites** - have unlimited bandwidth.
* **First 100 GB Bandwidth** - FREE!
* **1 Gb bandwidth** - $0.12 or 12 cents pro-rated to the megabyte.

:::important
Bandwidth is currently 100% Free Until October 2020
:::