'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Handle login logic here
  };

  return (
    <section id="content">
      <div className="content-wrap">
        <div className="container pt-4 pb-5">
          <div className="row justify-content-between align-items-center">
            {/* Features Sidebar */}
            <div className="col-lg-5 col-md-6 mb-5 mb-md-0">
              <div className="feature-box fbox-plain mb-4">
                <div className="fbox-icon">
                  <i className="bi-check-circle-fill text-primary"></i>
                </div>
                <div className="fbox-content">
                  <h3 className="fw-normal text-transform-none">Classes Every Week.</h3>
                  <p>Expert-led yoga classes designed to strengthen your body, calm your mind, and nurture your spirit.</p>
                </div>
              </div>

              <div className="feature-box fbox-plain mb-4">
                <div className="fbox-icon">
                  <i className="bi-check-circle-fill text-warning"></i>
                </div>
                <div className="fbox-content">
                  <h3 className="fw-normal text-transform-none">10+ Years Experienced.</h3>
                  <p>Experienced instructors with deep knowledge of traditional and modern yoga practices.</p>
                </div>
              </div>

              <div className="feature-box fbox-plain mb-4">
                <div className="fbox-icon">
                  <i className="bi-check-circle-fill text-info"></i>
                </div>
                <div className="fbox-content">
                  <h3 className="fw-normal text-transform-none">2100+ Members Active.</h3>
                  <p>Join a vibrant community of yoga enthusiasts on their journey to wellness and inner peace.</p>
                </div>
              </div>

              <div className="feature-box fbox-plain">
                <div className="fbox-icon">
                  <i className="bi-check-circle-fill text-danger"></i>
                </div>
                <div className="fbox-content">
                  <h3 className="fw-normal text-transform-none">Well Trained Teachers.</h3>
                  <p>Learn from certified yoga instructors dedicated to your personal growth and wellness journey.</p>
                </div>
              </div>
            </div>

            {/* Login Form */}
            <div className="col-lg-5 col-md-6">
              <div className="card pricing border-0 shadow bg-color dark">
                <div className="card-body rounded pb-0 px-4 px-lg-5 pt-4 pt-lg-5">
                  <div className="d-block d-lg-flex flex-row justify-content-lg-between align-items-lg-center">
                    <h3 className="h6 fw-bolder mb-2 mb-lg-0 text-white">Don&apos;t have an account?</h3>
                    <Link href="#" className="button button-small button-light button-white button-rounded m-0">
                      Register Now
                    </Link>
                  </div>
                  <div className="line line-sm"></div>
                  <h3 className="h5 fw-bolder mb-3 text-white">Sign In</h3>
                  <p className="text-smaller mb-0" style={{ lineHeight: '1.5' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel odio non dicta.
                  </p>
                  <form id="login-form" name="login-form" className="mb-0 row" onSubmit={handleSubmit}>
                    <div className="col-12 form-group">
                      <label className="text-transform-none ls-0 font-body mb-1 fw-normal" htmlFor="login-form-username">
                        Username:
                      </label>
                      <input
                        type="text"
                        id="login-form-username"
                        name="username"
                        className="form-control fw-semibold not-dark"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="clear"></div>
                    <div className="col-12 form-group">
                      <label className="text-transform-none ls-0 font-body mb-1 fw-normal" htmlFor="login-form-password">
                        Password:
                      </label>
                      <div className="input-group">
                        <input
                          id="login-form-password"
                          name="password"
                          type="password"
                          className="form-control fw-semibold not-dark"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-between">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        <label className="form-check-label text-transform-none ls-0 mb-0 fw-semibold" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <Link href="#" className="text-smaller fw-medium text-light">
                        <u>Forgot Password?</u>
                      </Link>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn btn rounded bg-dark text-white text-uppercase fw-semibold ls-1 py-2 px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
