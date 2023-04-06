import { Wrap } from './ContactList.styled';
import propTypes from 'prop-types';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/filterContacts';

export const ContactList = () => {
  const { data, error, isLoading } = useFetchContactsQuery();
  const filter = useSelector(getFilterContacts);
  const [deleteContact, { isLoading: loading }] = useDeleteContactMutation();

  const list =
    filter !== ''
      ? data.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : data;

  return (
    <>
      <Wrap>
        <List
          sx={{
            width: 400,
            maxWidth: 460,
          }}
        >
          {error ? (
            <p>Oh no, We could not find your contacts</p>
          ) : isLoading ? (
            <Wrap>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </Wrap>
          ) : data ? (
            list.map(contact => (
              <ListItem alignItems="flex-start" key={contact.id}>
                <ListItemAvatar>
                  <Avatar
                    alt={contact.name}
                    src="https://cdn-icons-png.flaticon.com/512/5480/5480725.png"
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{ fontSize: '36px' }}
                  primary={contact.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {contact.number}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Button
                  sx={{
                    top: '10px',
                  }}
                  color="success"
                  name={contact.id}
                  onClick={() => deleteContact(contact.id)}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  disabled={loading}
                >
                  Delete
                </Button>
              </ListItem>
            ))
          ) : null}
        </List>
      </Wrap>
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
