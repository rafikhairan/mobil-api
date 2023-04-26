const catchError = (error) => {
  return { status: 500, message: "Server error", serverMessage: error };
};

module.exports = catchError;
