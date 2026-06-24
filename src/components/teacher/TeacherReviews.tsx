interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface Props {
  reviews: Review[];
}

function TeacherReviews({ reviews }: Props) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6">
      <h2 className="text-xl font-bold text-slate-900">
        Sharhlar ({reviews.length})
      </h2>
      {reviews.length === 0 ? (
        <p className="text-slate-500 mt-4">Hozircha sharhlar yo'q</p>
      ) : (
        <div className="space-y-4 mt-4">
          {reviews.map((review) => (
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
                    <span className="text-xs text-slate-400">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 mt-2">{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeacherReviews;
