---
title: "Github Enterprise on Proxmox"
excerpt: "Since GHE provides a QCOW2 images I decided to actually use it, since we use Proxmox that's what I will be focussing on in this post."
cover: "/blog/covers/servers.jpg"
date: "2021-05-04T10:53:12.000Z"
tags: "github, kvm, proxmox, tutorial"
author:
    name: Nejc Drobnič
    avatar: "/authors/quantumly.png"
    twitter: quantumlytngld
    github: quantumlytangled
language: "en"
---

*This post is a work in progress, and will be updated over time.*

# Intro

* Github Enterprise Server contains all the features developers love about Actions and Packages. Workflows can be triggered by events such as creating an issue, a new release, or opening a pull request – making it easy to automate and customize your GitHub deployment.
* Proxmox Virtual Environment is an open-source server virtualization management platform. It is a Debian-based Linux distribution with a modified Ubuntu LTS kernel and allows deployment and management of virtual machines and containers.

## Create a VM

Firstly, we need to create a basic VM. Though since we're going to be using the Github Enterprise Server QCOW2 image we won't need to specify any boot media. Thus the options should look something like this.
![VM OS options](/blog/ghe-pve/VMOS.png)

In the `Hard Disk` section we will be asked to configure a `Disk size` but that doesn't really matter since we will be discarding it later on.

## Downloading the Github Enterprise Server disk image

Secondly, we need to download the Github Enterprise server image. Since we're going to be deploying it on Proxmox we specifically need the QCOW2 format.
The image can be downloaded on the [release page](https://enterprise.github.com/releases).

We can download the latest (as I'm writing this) image as follows:
```shell
wget https://github-enterprise.s3.amazonaws.com/kvm/releases/github-enterprise-3.0.6.qcow2 -O ghes.qcow2
```

Since we will be importing this as a disk for a VM later we want to save it on the root machine.


[GHSEReleases]: https://enterprise.github.com/releases
