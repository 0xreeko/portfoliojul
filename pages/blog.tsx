import type { NextPage } from 'next'
import { Alert } from '../components/Alert/Alert';
import { Header } from '../components/Header/Header';
import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'
import Link from 'next/link';

const Blog: NextPage = () => {
    return (
        <div className='border text-sylver-100'>
            <Alert/>
            <Header/>
            <div className="">
                
            </div>
            </div>
    )
};

export default Blog

export const getStaticProps = async () => {

   
  return {
    
  }
}