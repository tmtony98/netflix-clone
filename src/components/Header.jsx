import React from 'react'

function Header() {
  return (

    <>
  <nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <a class="navbar-brand text-danger mx-3 fs-3 fw-bold" href="#">NETFLIX</a>
    <button class="navbar-toggler" type="button btn-primary" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav  " style={{marginLeft:'150px'}}>
        <a class="nav-link text-light mx-2 "  href="#">Home</a>
        <a class="nav-link text-light mx-2 " href="#">TV Shows</a>

        <a class="nav-link text-light mx-2 " href="#">Series</a>
        <a class="nav-link text-light mx-2  " href="#">My List</a>
        <form class="d-flex" style={{marginLeft:"280px"}} role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>


      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header