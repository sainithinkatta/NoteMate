import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {

  if (!userInfo) {
    return null;
  }

  const { fullName } = userInfo;

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(fullName)}
      </div>

      <div>
        <p className="text-sm font-medium">{fullName}</p>
        <button
          type="button"
          className="text-sm text-slate-700 underline"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;