import type { IReview } from "../../types/courses.type";

interface Props {
  reviews: IReview[];
  total: number;
}

function CourseReviews({ reviews, total }: Props) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Sharhlar ({total})</h2>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          Barchasini ko'rish
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {reviews.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="border-2 border-slate-100 rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">
                    {"⭐".repeat(review.rating)}
                  </span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 mt-2">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseReviews;
