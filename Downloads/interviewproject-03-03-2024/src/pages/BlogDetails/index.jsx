import React from 'react';
import { Layout } from '../../Component';
import { BlogPage } from '../../config';

export default function index() {

  const data = BlogPage;
  return (
    <Layout>
        <section className='service'>
            <div className='container-fluid'>
                <div className='row serviceBox justify-content-center' data-aos="fade-up" data-aos-duration="2000">
                    {data?.servicePart?.serviceData.map((items, i) => {
                            return (
                                <div data={items} key={items} className='col-lg-4 col-md-6 col-sm-12 padding'>
                                    
                                </div>
                            )
                    })}        
                </div>
            </div>
        </section>
    </Layout>
  );
  }
