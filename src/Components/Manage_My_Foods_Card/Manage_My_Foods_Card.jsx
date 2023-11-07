import PropTypes from "prop-types";

const Manage_My_Foods_Card = ({ data }) => {
  const {
    _id,
    Food_Image,
    Food_Name,
    Donator_Image,
    Donator_Name,
    Food_Quantity,
    Pickup_Location,
    Expired_Date_Time,
    Additional_Notes,
  } = data || {};
  console.log(data);

  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

Manage_My_Foods_Card.propTypes = {
  data: PropTypes.object,
};

export default Manage_My_Foods_Card;
