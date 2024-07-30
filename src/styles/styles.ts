import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flexRow: {flexDirection: 'row'},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    right: 90,
    backgroundColor: '#1F5DA0',
    borderRadius: 3,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  outletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 5,
  },
  outletContainerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 5,
    backgroundColor: '#1F5DA0',
  },
  outletText: {
    fontSize: 16,
    fontWeight: '600',
  },
  outletTextDetails: {
    fontSize: 16,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: '#555',
  },
  detailContainer: {
    padding: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  outletDetailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  outletDetailsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  outletDetailsInfoContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  outletDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  outletDetailsText: {
    fontSize: 16,
    marginBottom: 4,
  },
  outletDetailsTextBold: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  outletDetailsButton: {
    marginTop: 16,
    padding: 12,
    width: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1F5DA0',
    flexDirection: 'row',
  },
  outletDetailsButtonText: {
    color: '#1F5DA0',
    fontSize: 14,
    marginRight: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default styles;
