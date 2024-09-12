import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
//Order

//Home Page
{path: "Donut", component:DonutComponent},
//Id
{path: "Donut/:id", component:DonutDetailsComponent},
//Cart
{path: "Cart", component:CartComponent},
//Redirects to Homee
{path: "", component:DonutComponent},
//Not found
{path: "**", component: ErrorComponent},




];
