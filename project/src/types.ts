export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}