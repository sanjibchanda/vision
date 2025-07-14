import React from "react";
import { Container } from "../components";
import { FaStar, FaCircleCheck, FaStarHalfStroke } from "react-icons/fa6";
import { reviewData } from "../data";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalf && <FaStarHalfStroke />}
    </>
  );
};

const calculateStarDistribution = (reviews) => {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const rounded = Math.round(r.rating);
    counts[rounded] = (counts[rounded] || 0) + 1;
  });

  const total = reviews.length;
  const percentages = {};
  for (let star = 1; star <= 5; star++) {
    percentages[star] = total ? (counts[star] / total) * 100 : 0;
  }

  return { counts, percentages };
};

const Review = ({ className = "" }) => {
  const { counts, percentages } = calculateStarDistribution(reviewData);
  const averageRating =
    reviewData.reduce((sum, r) => sum + r.rating, 0) / reviewData.length;
  return (
    <section className={className}>
      <Container className="space-y-6 md:space-y-8 xl:space-y-10">
        <h3 className="text-accent font-semibold font-heading">
          Customers Reviews
        </h3>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-4">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <div className="font-heading font-semibold">
                <span className="text-5xl">{averageRating.toFixed(1)}</span>
                <span>/5</span>
              </div>
              <div className="text-sm space-y-1">
                <div className="flex gap-1 text-teritory">
                  {renderStars(averageRating)}
                </div>
                <p className="text-muted">{reviewData.length} global ratings</p>
              </div>
            </div>
            <ul className="space-y-1">
              {/* Star Distribution */}
              {[5, 4, 3, 2, 1].map((star) => (
                <li key={star} className="flex items-center gap-2 text-sm">
                  <span className="w-16">{star} star</span>
                  <span className="bg-surface rounded-full h-2 w-full">
                    <span
                      className="bg-black h-full block rounded-full"
                      style={{ width: `${percentages[star]}%` }}
                    ></span>
                  </span>
                  <span className="w-10 text-end">
                    {Math.round(percentages[star])}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 space-y-6">
            <ul className="space-y-4">
              {reviewData.map((review) => (
                <li
                  key={review.id}
                  className="space-y-4 border-b border-border pb-4"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-1 text-teritory">
                      {renderStars(review.rating)}
                    </div>
                    <div className="text-xs text-muted">{review.date}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">{review.reviewer}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-muted text-sm">
                        <FaCircleCheck /> Verified Customer
                      </span>
                    )}
                  </div>
                  <p className="text-sm/6 text-muted">{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Review;
