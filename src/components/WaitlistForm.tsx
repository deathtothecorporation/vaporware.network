import { useState, useRef } from "react";

const WaitlistForm = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [signupEntry, setSignupEntry] = useState("");
  const [thanks, setThanks] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const resetFlags = () => {
    setThanks(false);
    setError(false);
    setLoading(false);
  };

  const handleTransitionEnd = () => {
    if (isFadingOut) {
      setShowUpdateForm(false);
      setIsFadingOut(false);
      setThanks(false);

    }
  };

  const invalid = () => {
    const patpee = /^~[a-z-]*$/;
    const email = /^.*@.*\..*$/;
    if (!patpee.test(signupEntry) && !email.test(signupEntry)) {
      setError(true);
      return true;
    }
    return false;
  };

  const submitForm = async (event) => {
    if (loading) return;
    event.preventDefault();

    setLoading(true);
    if (invalid()) {
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("entry.1987957812", signupEntry);

    try {
      await fetch(
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfBDo4OJQ3iJrMqTcWrcg6m_qqP09Hni9w-44dirgOUri3pxA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );
      setSignupEntry("");
      setThanks(true);
      setTimeout(() => {
        setIsFadingOut(true);
      }, 2000);
    } catch (error) {
      console.error("bad signup ", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const toggleUpdateForm = () => {
    if (showUpdateForm) {
      setIsFadingOut(true);
      resetFlags();
    } else {
      setShowUpdateForm(true);
      setError(false);
      setThanks(false);
    }
  };

  return (
    <div className="relative text-white text-sm">
      <div className="flex justify-end items-center">
        {showUpdateForm && (
          <div
            className={`transition-opacity duration-300 ${
              isFadingOut ? "opacity-0" : "opacity-100"
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <form
              id="waitlistForm"
              className="flex flex-col items-end gap-4"
              onSubmit={submitForm}
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
          className="placeholder:text-white text-lg font-bold bg-transparent border-b border-white px-2 py-1 w-48 text-right focus:outline-none focus:border-white"
                  id="input-entry"
                  type="text"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="email address"
                  value={signupEntry}
                  onChange={(e) => setSignupEntry(e.target.value)}
                  onKeyDown={resetFlags}
                />
                <button className="" disabled={loading} type="submit">
                  Submit
                </button>
              </div>
              {false && (
                <button type="button" className="" onClick={toggleUpdateForm}>
                  Close
                </button>
              )}
            </form>
          </div>
        )}
        {!showUpdateForm && !isFadingOut && (
          <button onClick={toggleUpdateForm} className="">
            Waitlist
          </button>
        )}
      </div>

      {loading && (
        <div className="text-lg font-bold mt-2 text-right text-white">
          Submitting...
        </div>
      )}
      {thanks && (
        <div className="text-lg font-bold mt-2 text-right text-white">
          Thank you for signing up!
        </div>
      )}
      {error && (
        <div className="text-lg font-bold mt-2 text-right text-white">
          Please enter a valid email
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
