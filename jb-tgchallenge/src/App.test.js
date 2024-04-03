// Location.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Location from "./ui/location.component/location.component";

describe('Location component', () => {
  const locationProps = {
    img: 'test-img-url',
    name: 'Test Location',
    details: 'Test location details',
    features: {
      floors: 3,
      amenities: ['free_wifi', 'event_spaces'],
      virtual_tour_link: 'test-virtual-tour-link',
    },
  };

  it('renders view location details button correctly', () => {
    render(<Location location={locationProps} />);
    const button = screen.getByText('View Location Details');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-bs-target', '#offcanvas-test-location');
    expect(button).toHaveAttribute('aria-controls', 'offcanvas-test-location');
  });

  it('renders features & amenities correctly', () => {
    render(<Location location={locationProps} />);
    expect(screen.getByText('Number of Floors: 3')).toBeInTheDocument();
    expect(screen.getByText('Free WiFi: Yes')).toBeInTheDocument();
    expect(screen.getByText('Virtual Tour')).toBeInTheDocument();
    expect(screen.getByText('Event Spaces Available')).toBeInTheDocument();
  });

  it('renders details section correctly', () => {
    render(<Location location={locationProps} />);
  
    const detailsHeader = screen.getByText('Details');
    expect(detailsHeader).toBeInTheDocument();
  
    const detailsText = screen.getByText('Test location details');
    expect(detailsText).toBeInTheDocument();
  });
  

});
